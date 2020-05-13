let address: any =  {
    country: "Korea",
    city: "Seoul",
    address1: "G",
    address2: "W",
    address3: "7"
}

const {country, city, ...detail} = address;
console.log(detail)