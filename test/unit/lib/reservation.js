const chai = require("chai");
const should = chai.should();
const Reservation = require("../../../lib/schema/reservation");
const reservations = require("../../../lib/reservations");

describe("Reservation Library", function () {
  context("Validate", function () {
    it("should pass a valid reservation with no optional fields", function () {
      const reservation = new Reservation({
        date: "2020/06/10",
        time: "06:02 AM",
        party: 4,
        name: "Family",
        email: "family@ymail.com",
      });

      return reservations
        .validate(reservation)
        .then((actual) => actual.should.deep.equal(reservation));
    });
    it("should fail an invalid reservation with a bad email", function () {
      const reservation = new Reservation({
        date: "2020/06/10",
        time: "06:02 AM",
        party: 4,
        name: "Family",
        email: "family",
      });

      return reservations
        .validate(reservation)
        .catch((error) => error.should.be.an("error").and.not.be.null);
    });
  });
});
