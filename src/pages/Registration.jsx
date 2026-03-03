// Registration.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import countryCodes from "../data/countryCodes";
import qrCodeImg from "../assets/sbi-qr.png";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    mobileNumber: "",
    address: "",
    city: "",
    zipCode: "",
    postalCode: "",
    country: "",
    category: "Student Participants(U.G. / P.G. / Ph.D.)", // Updated default
    receiptName: "", 
    receiptFile: "", 
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("File is too large. Please upload a receipt under 5MB.");
      e.target.value = ""; 
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        receiptName: file.name,
        receiptFile: reader.result, 
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const powerAutomateURL = "https://default624d5c4b45c541228cd044f0f84e94.5d.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/3108300cddba4181b534f80eb703b3a3/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Hbo5x43skG8NaIAGOOYcq0TKOQJ5F7A04jVx3eOB1gE";

    try {
      const response = await fetch(powerAutomateURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful! We look forward to seeing you at IIT Delhi.");
        navigate("/"); 
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("An error occurred while submitting. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="container registration-container">
        
        {/* FEE SCHEDULE SECTION */}
        <div className="pre-form-info">
          <p className="fee-note">Payment to be made in INR (by Indian delegates), and in USD (by International delegates).</p>
        </div>

        <div className="glass-card fee-card">
          <h2>Registration Fee</h2>
          
          <div className="fee-section">
            <h3>Student Participants(U.G. / P.G. / Ph.D.)</h3>
            <div className="fee-grid">
              <div><span className="fee-label">Early Bird Registration:</span><br/>INR TBA / USD TBA</div>
              <div><span className="fee-label">Regular Registration:</span><br/>INR TBA / USD TBA</div>
              <div><span className="fee-label">Late Registration:</span><br/>INR TBA / USD TBA</div>
            </div>
          </div>

          <div className="fee-section">
            <h3>Non-Student Participants(Faculty / Scientist / Researcher / Industry)</h3>
            <div className="fee-grid">
              <div><span className="fee-label">Early Bird Registration:</span><br/>INR TBA / USD TBA</div>
              <div><span className="fee-label">Regular Registration:</span><br/>INR TBA / USD TBA</div>
              <div><span className="fee-label">Late Registration:</span><br/>INR TBA / USD TBA</div>
            </div>
          </div>

          <div className="fee-section no-border">
            <h3>Non-Participants (Accompanying Persons)</h3>
            <div className="fee-grid">
              <div><span className="fee-label">Early Bird Registration:</span><br/>INR TBA / USD TBA</div>
              <div><span className="fee-label">Regular Registration:</span><br/>INR TBA / USD TBA</div>
              <div><span className="fee-label">Late Registration:</span><br/>INR TBA / USD TBA</div>
            </div>
          </div>
        </div>

        <div className="glass-card payment-details-card">
          <h2>Payment Information</h2>
          <p className="instruction-text">
            Please complete the bank transfer using the details below before filling out the registration form. 
            You will need to upload your payment confirmation (Receipt/Screenshot) to complete registration.
          </p>

          <div className="payment-flex">
            {/* Left Side: Table */}
            <div className="bank-info">
              <h3>Bank Mandate Details</h3>
              <table className="bank-table">
                <tbody>
                  <tr><td><strong>Account Name</strong></td><td>IRD ACCOUNT IITD</td></tr>
                  <tr><td><strong>Bank Name</strong></td><td>State Bank of India</td></tr>
                  <tr><td><strong>Account No.</strong></td><td>10773572600</td></tr>
                  <tr><td><strong>IFSC Code</strong></td><td>SBIN0001077</td></tr>
                  <tr><td><strong>MICR Code</strong></td><td>110002156</td></tr>
                  <tr><td><strong>SWIFT Code</strong></td><td>SBININBB547</td></tr>
                  <tr><td><strong>Branch</strong></td><td>IIT Delhi, Hauz Khas, New Delhi-110016</td></tr>
                </tbody>
              </table>
            </div>

            {/* Right Side: QR Code */}
            <div className="qr-section">
              <div className="qr-box">
                <img src={qrCodeImg} alt="SBI UPI QR Code" className="qr-image" />
              </div>
              <p className="qr-helper">UPI ID: <strong>10773572600@sbi</strong></p>
              <p className="qr-subtext">Supports BHIM, GPay, PhonePe, Paytm</p>
              <h3>Scan to Pay</h3>
            </div>
          </div>
        </div>

        {/* REGISTRATION FORM */}
        <div className="glass-card">
          <div className="page-header">
            <h1>Registration Form</h1>
            <p>Please provide your details and upload the payment receipt.</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* PERSONAL DETAILS */}
            <h3 className="form-section">Personal Details</h3>
            <div className="grid-2">
              <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

            {/* CONTACT */}
            <h3 className="form-section">Contact Information</h3>
            <div className="grid-3">
              <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                {countryCodes.map((c) => (
                  <option key={c.country} value={c.code}>{c.code} ({c.country})</option>
                ))}
              </select>
              <input name="mobileNumber" placeholder="Mobile Number (with area code)" value={formData.mobileNumber} onChange={handleChange} required />
            </div>

            {/* ADDRESS */}
            <h3 className="form-section">Address</h3>
            <input name="address" placeholder="Institution or Residential Address" value={formData.address} onChange={handleChange} required />
            <div className="grid-2">
              <input name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
              <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
            </div>
            <div className="grid-2">
              <input name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} required />
              <input name="postalCode" placeholder="Postal Code (optional)" value={formData.postalCode} onChange={handleChange} />
            </div>

            {/* UPDATED CATEGORIES */}
            <h3 className="form-section">Registration Category</h3>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="Student Participants(U.G. / P.G. / Ph.D.)">Student Participants(U.G. / P.G. / Ph.D.) </option>
              <option value="Non-Student Participants(Faculty / Scientist / Researcher / Industry) ">Non-Student Participants(Faculty / Scientist / Researcher / Industry) </option>
              <option value="Non-Participants (Accompanying Persons)">Non-Participants (Accompanying Persons)</option>
            </select>
            <p className="helper">Registration category determines applicable fees.</p>

            {/* PAYMENT RECEIPT UPLOAD */}
            <h3 className="form-section">Payment Verification</h3>
            <p className="helper" style={{ marginBottom: "0.8rem" }}>
              Please upload a screenshot or PDF of your payment receipt (Max 5MB).
            </p>
            <input type="file" name="receipt" accept=".pdf, image/jpeg, image/png" onChange={handleFileChange} required style={{ padding: "0.5rem 0", border: "none" }} />

            {/* SUBMIT */}
            <button type="submit" className="btn primary" disabled={isLoading}>
              {isLoading ? "Registering…" : "Register"}
            </button>

            <p className="redirect-note">
              After registration, your details will be recorded and you will be redirected to the homepage.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;