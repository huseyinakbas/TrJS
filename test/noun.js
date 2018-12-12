
const {Genitive, Case, Noun} = require("../Dist/Noun");
const {Pronouns} = require("../Dist/Pronouns");
const assert = require("assert");
describe("Module Noun", () => {
  describe("Case Test", () => {
    it("should return accusative case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Case.Accusative);
      assert.equal(araba.toString(), "araba");

      const ev = new Noun("ev");
      ev.suffix(Case.Accusative);
      assert.equal(ev.toString(), "ev");

    });

    it("should return dative case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Case.Dative);
      assert.equal(araba.toString(), "arabaya");

      const depo = new Noun("depo");
      depo.suffix(Case.Dative);
      assert.equal(depo.toString(), "depoya");

      const ev = new Noun("ev");
      ev.suffix(Case.Dative);
      assert.equal(ev.toString(), "eve");

      const kagit = new Noun("kağıt");
      kagit.suffix(Case.Dative);
      assert.equal(kagit.toString(), "kağıda");

    });

    it("should return ablative case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Case.Ablative);
      assert.equal(araba.toString(), "arabadan");

      const depo = new Noun("depo");
      depo.suffix(Case.Ablative);
      assert.equal(depo.toString(), "depodan");

      const ev = new Noun("ev");
      ev.suffix(Case.Ablative);
      assert.equal(ev.toString(), "evden");

      const kagit = new Noun("kağıt");
      kagit.suffix(Case.Ablative);
      assert.equal(kagit.toString(), "kağıttan");

    });

    it("should return locative case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Case.Locative);
      assert.equal(araba.toString(), "arabada");

      const depo = new Noun("depo");
      depo.suffix(Case.Locative);
      assert.equal(depo.toString(), "depoda");

      const ev = new Noun("ev");
      ev.suffix(Case.Locative);
      assert.equal(ev.toString(), "evde");

      const kagit = new Noun("kağıt");
      kagit.suffix(Case.Locative);
      assert.equal(kagit.toString(), "kağıtta");

    });

  });

  describe("Genitive Case Test", () => {
    //Singular
    it("should return genitive first Pronouns singular case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Pronouns.Ben]);
      assert.equal(araba.toString(), "arabam");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Pronouns.Ben]);
      assert.equal(depo.toString(), "depom");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Pronouns.Ben]);
      assert.equal(ev.toString(), "evim");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Pronouns.Ben]);
      assert.equal(kagit.toString(), "kağıdım");

    });
    
    it("should return genitive second Pronouns singular case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Pronouns.Sen]);
      assert.equal(araba.toString(), "araban");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Pronouns.Sen]);
      assert.equal(depo.toString(), "depon");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Pronouns.Sen]);
      assert.equal(ev.toString(), "evin");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Pronouns.Sen]);
      assert.equal(kagit.toString(), "kağıdın");

    });

    it("should return genitive third Pronouns singular case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Pronouns.O]);
      assert.equal(araba.toString(), "arabası");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Pronouns.O]);
      assert.equal(depo.toString(), "deposu");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Pronouns.O]);
      assert.equal(ev.toString(), "evi");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Pronouns.O]);
      assert.equal(kagit.toString(), "kağıdı");

    });
    //Plural
    it("should return genitive first Pronouns plural case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Pronouns.Biz]);
      assert.equal(araba.toString(), "arabamız");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Pronouns.Biz]);
      assert.equal(depo.toString(), "depomuz");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Pronouns.Biz]);
      assert.equal(ev.toString(), "evimiz");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Pronouns.Biz]);
      assert.equal(kagit.toString(), "kağıdımız");

    });

    it("should return genitive second Pronouns plural case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Pronouns.Siz]);
      assert.equal(araba.toString(), "arabanız");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Pronouns.Siz]);
      assert.equal(depo.toString(), "deponuz");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Pronouns.Siz]);
      assert.equal(ev.toString(), "eviniz");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Pronouns.Siz]);
      assert.equal(kagit.toString(), "kağıdınız");

    });

    it("should return genitive third Pronouns plural case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Pronouns.Onlar]);
      assert.equal(araba.toString(), "arabaları");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Pronouns.Onlar]);
      assert.equal(depo.toString(), "depoları");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Pronouns.Onlar]);
      assert.equal(ev.toString(), "evleri");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Pronouns.Onlar]);
      assert.equal(kagit.toString(), "kağıtları");

    });
  });

  describe("Method Test", () => {
    it("case method", () => {
      const araba = new Noun("araba");
      araba.case(Case.Ablative)
      assert.equal(araba.toString(), "arabadan");
    });

    it("genitive method", () => {
      const araba = new Noun("araba");
      araba.genitive(Pronouns.Onlar);
      assert.equal(araba.toString(), "arabaları");
    });
  });
  
})