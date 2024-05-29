import { Injectable } from '@angular/core';
import { AddressListing } from './AddressListing';
@Injectable({
  providedIn: 'root'
})
export class AddressListingService {

  constructor() { }

  getListings() : AddressListing[]  {
    
    let stubListings: AddressListing[] = new Array();
    
    stubListings.push(new AddressListing(
      "214",
      "John Pickney Blvd",
      "Williamsburg",
      "VA",
      23185,
      "This is a test address.",));

    stubListings.push(new AddressListing(
      "123",
      "Sheetz Avn",
      "Williamsburg",
      "VA",
      23185,
      "This is a test address as well.",
    ));

    return stubListings;
  }

  isListingEquals(listing1: AddressListing, listing2: AddressListing): boolean{

    if (listing1.houseNumber == listing2.houseNumber
      && listing1.street == listing2.street
      && listing1.state == listing2.state
      && listing1.zipcode == listing2.zipcode
      && listing1.city == listing2.city
      && listing1.notes == listing2.notes)
      return true;
    return false;
  }
}
