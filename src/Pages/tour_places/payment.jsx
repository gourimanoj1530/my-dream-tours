import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // To get destination from URL
import Navbar from '../../components/Navbar';
import './payment.css';

const PaymentDetails = () => {
    const { destination } = useParams(); // Extract destination from URL
    const [formData, setFormData] = useState({
        email: '',
        cardNumber: '',
        expiry: '',
        streetAddress: '',
        aptUnit: '',
        country: '',
        state: '',
        city: '',
        zipCode: ''
    });
    
    const [otpSent, setOtpSent] = useState(false);  // To track if OTP is sent
    const [otp, setOtp] = useState('');             // To store OTP from backend
    const [userOtp, setUserOtp] = useState('');     // To store OTP entered by the user

    // Handle form data input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle OTP input change
    const handleOtpChange = (e) => {
        setUserOtp(e.target.value);
    };

    // Handle form submission (send OTP to email)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send email to backend to generate OTP
            const response = await fetch('http://localhost:5002/api/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email }), // Only send email
            });

            const result = await response.json();
            if (response.ok) {
                setOtp(result.otp); // Set OTP (for testing; don't expose this in production)
                setOtpSent(true);   // Mark that the OTP has been sent
            } else {
                console.error('Failed to send OTP');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Handle OTP verification and send confirmation email
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        if (otp === userOtp) {
            alert('OTP verified successfully!');
            try {
                // Send confirmation email with the destination after OTP is verified
                const response = await fetch('http://localhost:5002/api/send-confirmation-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: formData.email, destination }), // Send email and destination
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Confirmation email sent! Enjoy your trip to ' + destination);
                } else {
                    console.error('Failed to send confirmation email');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="payment-wrapper">
            <Navbar/>
            <div className="form-container">
                {!otpSent ? (
                    <form onSubmit={handleSubmit}>
                        <h2>Enter your payment details</h2>
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="expiry"
                            placeholder="MM/YYYY CVC"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="streetAddress"
                            placeholder="Street Address"
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="aptUnit"
                            placeholder="Apt/Unit, Suite etc"
                            value={formData.aptUnit}
                            onChange={handleInputChange}
                            required
                        />
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Canada">Canada</option>
                        </select>
                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select State</option>
                            <option value="kerala">Kerala</option>
                            {/* Add more states here */}
                        </select>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="zipCode"
                            placeholder="Zip Code"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <button type="submit">Send OTP</button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtp}>
                        <h2>Verify OTP</h2>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={userOtp}
                            onChange={handleOtpChange}
                            required
                        />
                        <button type="submit">Verify OTP</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PaymentDetails;
