import React, { useState } from "react";

const OrderBillingForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    fullName: "",
    status: "Pending",
    tracking: `TRACK-${Date.now()}`,
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    county: "",
  });

  const [errors, setErrors] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "firstName" || name === "lastName") {
      setFormData((prev) => ({
        ...prev,
        fullName: `${prev.firstName} ${prev.lastName}`,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (
      !formData.email ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip || formData.zip.length !== 5) {
      newErrors.zip = "Zip Code must be 5 digits";
    }
    if (!formData.county) newErrors.county = "County is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      fullName: "",
      status: "Pending",
      tracking: `TRACK-${Date.now()}`,
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      county: "",
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-4 right-4 py-2 px-4 rounded-full shadow-md flex items-center justify-center w-12 h-12 transition-all duration-300 ${
          darkMode
            ? "bg-gray-700 hover:bg-gray-600 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-900"
        }`}
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className={`container mx-auto p-6 rounded-lg shadow-md transition-all duration-300 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } font-sans`}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Order Billing Form
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.fullName}
                readOnly
              />
            </div>

            {/* Tracking */}
            <div>
              <label htmlFor="tracking" className="block text-sm font-medium">
                Tracking
              </label>
              <input
                type="text"
                id="tracking"
                name="tracking"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.tracking}
                readOnly
              />
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium">
                Status
              </label>
              <input
                type="text"
                id="status"
                name="status"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.status}
                readOnly
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium">
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>

            {/* Address 2 */}
            <div>
              <label htmlFor="address2" className="block text-sm font-medium">
                Address 2 (Optional)
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.address2}
                onChange={handleChange}
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium">
                State *
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.state}
                onChange={handleChange}
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>

            {/* ZIP */}
            <div>
              <label htmlFor="zip" className="block text-sm font-medium">
                ZIP Code *
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.zip}
                onChange={handleChange}
              />
              {errors.zip && (
                <p className="text-red-500 text-sm">{errors.zip}</p>
              )}
            </div>

            {/* County */}
            <div>
              <label htmlFor="county" className="block text-sm font-medium">
                County *
              </label>
              <input
                type="text"
                id="county"
                name="county"
                className={`w-full mt-1 p-2 border rounded-md ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                value={formData.county}
                onChange={handleChange}
              />
              {errors.county && (
                <p className="text-red-500 text-sm">{errors.county}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`mt-6 w-full py-2 px-4 rounded-lg text-white transition-all duration-500 transform hover:scale-105 active:scale-95 ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-500 shadow-lg"
                : "bg-blue-500 hover:bg-blue-600 shadow-md"
            }`}
          >
            Submit
          </button>
        </form>
      ) : (
        <div
          className={`p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Form Submitted Successfully!
          </h2>
          <pre className="overflow-auto">{JSON.stringify(formData, null, 2)}</pre>
          <button
            onClick={handleReset}
            className={`mt-6 w-full py-2 px-4 rounded-lg text-white transition-all duration-300 ${
              darkMode
                ? "bg-red-600 hover:bg-red-500"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Reset Form
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderBillingForm;
