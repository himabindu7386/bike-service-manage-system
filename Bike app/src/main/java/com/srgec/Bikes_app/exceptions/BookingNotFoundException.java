package com.srgec.Bikes_app.exceptions;



public class BookingNotFoundException extends RuntimeException {

    public BookingNotFoundException(String message) {
        super(message);
    }
}
