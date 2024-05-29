import { Component, Input, OnInit } from '@angular/core';
import { AddressListingService } from 'src/app/services/address-listing.service';
import { AddressListing } from 'src/app/services/AddressListing';

@Component({
  selector: 'app-confirmed-address-list',
  templateUrl: './confirmed-address-list.component.html',
  styleUrls: ['./confirmed-address-list.component.css']
})
export class ConfirmedAddressListComponent implements OnInit {

  addresses: AddressListing[];
  addressListings: AddressListingService;

  @Input() houseNumberInp: string;
  @Input() streetInp: string;
  @Input() cityInp: string;
  @Input() stateInp: string;
  @Input() zipcodeInp: any;
  @Input() notesInp: string;

  constructor() {
    this.houseNumberInp = "";
    this.streetInp = "";
    this.cityInp = "";
    this.stateInp = "";
    this.zipcodeInp = "";
    this.notesInp = "";
    this.addressListings = new AddressListingService();
    this.addresses = new Array();
    for (let item of this.addressListings.getListings()) {
      this.addresses.push(item);
    }
  }

  ngOnInit(): void {
  }

  remove(item: AddressListing): void {
    for (let i: number = 0; i < this.addresses.length; i++){
      if (this.addressListings.isListingEquals(this.addresses[i], item)){
        this.addresses.splice(i, 1); 
      }
    }
  }

  add(): void {
    this.addresses.push(
      new AddressListing(
        this.houseNumberInp,
        this.streetInp,
        this.cityInp,
        this.stateInp,
        this.zipcodeInp,
        this.notesInp
      ));
  }

}
