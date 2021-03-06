function produceDrivingRange(range) {
  return function (start, end) {
    if (parseInt(start) < parseInt(end)) {
      let distance = parseInt(end) - parseInt(start);
      if (distance < range) {
        return `within range by ${range - distance}`;
      } else {
        return `${distance - range} blocks out of range`;
      }
    } else {
      let distance = parseInt(start) - parseInt(end);
      if (distance < range) {
        return `within range by ${range - distance}`;
      } else {
        return `${distance - range} blocks out of range`;
      }
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function (fare) {
    return fare * tipPercentage;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
