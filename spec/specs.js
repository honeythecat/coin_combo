describe ("coinCombo", function() {
  it("gives the greatest number of quarters", function() {
    expect(coinCombo(0.25)).to.eql(["1 quarter(s)", "0 dime(s)", "0 nickel(s)", "0 penny(ies)"]);
  });

  it("gives the greatest number of quarters then dimes", function() {
    expect(coinCombo(0.2)).to.eql(["0 quarter(s)", "2 dime(s)", "0 nickel(s)", "0 penny(ies)"]);
  });

  it("gives the greatest number of quarters, dimes, nickels", function() {
    expect(coinCombo(0.90)).to.eql(["3 quarter(s)", "1 dime(s)", "1 nickel(s)", "0 penny(ies)"]);
  });

  it("gives the greatest number of quarters, dimes, nickels, and pennies", function() {
    expect(coinCombo(0.99)).to.eql(["3 quarter(s)", "2 dime(s)", "0 nickel(s)", "4 penny(ies)"]);
  });

});
