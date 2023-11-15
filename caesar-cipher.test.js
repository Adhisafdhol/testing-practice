import caesarCipher from "./caesar-cipher";

test(`"attack at dawn" returns "buubdl bu ebxo"`, () => {
  expect(caesarCipher("attack at dawn", 1)).toMatch("buubdl bu ebxo");
});
