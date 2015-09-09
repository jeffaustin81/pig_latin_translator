describe('pigLatinGenerator', function() {
  it("if a word starts with a vowel, add 'ay' to the end", function() {
    expect(pigLatinGenerator("apple")).to.equal("appleay");
  });

  it("if a word starts with a consonate, put consonate at end of word followed by 'ay'", function() {
    expect(pigLatinGenerator("cat")).to.equal("atcay");
  });

  it("if a word starts with a consonate, put consonate at end of word followed by 'ay'", function() {
    expect(pigLatinGenerator("yesterday")).to.equal("esterdayyay");
  });

  it("if a word starts with a consonate followed by more consonates, put consonates at end of word followed by 'ay'", function() {
    expect(pigLatinGenerator("three")).to.equal("eethray");
  });

  it("if a word starts with qu, put qu at end of word followed by 'ay'", function() {
    expect(pigLatinGenerator("quit")).to.equal("itquay");
  });

  it("if a word starts with a consonate followed by qu, put the consonate and qu at end of word followed by 'ay'", function() {
    expect(pigLatinGenerator("squeal")).to.equal("ealsquay");
  });

  it("if you enter multiple words, returns all words converted to pig latin", function() {
    expect(stringToArray("squeal quit three yesterday")).to.equal("ealsquay itquay eethray esterdayyay");
  });
});
