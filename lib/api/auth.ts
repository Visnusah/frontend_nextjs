import axiosInstance from "./axios-instance";
import {API} from "./endpoints";

/**
 * Registers a new user by sending registration data to the server.
 * 
 * @param {any} data - The user information to be registered.
 * @returns {Promise<any>} - Returns the server response data on success.
 * @throws {Error} - Throws an error with a custom message from the response or a default fallback.
 */
export const register = async (data: any) => {
    try {
        // Send POST request to the registration endpoint
        const response = await axiosInstance.post(API.AUTH.REGESTER, data);
        
        // Return the payload from the response
        return response.data;
    } catch (error: any) {
        // Handle potential errors and extract the error message
        throw new Error(
            error?.response?.data?.message || "Registration Failed"
        );
    }
};