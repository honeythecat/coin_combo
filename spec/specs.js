describe ("coinCombo", function() {
  it("gives the greatest number of quarters", function() {
    expect(coinCombo(0.25)).to.eql(["1 quarters", "0 dimes"]);
  });

  it("gives the greatest number of quarters then dimes", function() {
    expect(coinCombo(0.95)).to.eql(["3 quarters", "2 dimes"]);
  });

});
