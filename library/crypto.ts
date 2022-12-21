import CryptoJS from "crypto-js";

type SYSTEM = "WEBSITE" | "ASSESSMENTS" | "APPLICATION";
type KEY = `process.env.NEXT_PUBLIC_${SYSTEM}_KEY`;
type IV = `process.env.NEXT_PUBLIC_${SYSTEM}_IV`;

export default class Encrypt {
  private key;
  private iv;

  constructor(key: KEY, iv: IV) {
    this.key = key;
    this.iv = iv;
  }

  encrypt(val) {
    try {
      if (typeof val === "object") {
        if (Array.isArray(val)) {
          return val.map((item) => this.encrypt(item));
        } else {
          return Object.entries(val).reduce((acc, [field, value]) => {
            acc[field] = this.encrypt(value);
            return acc;
          }, {});
        }
      }

      return CryptoJS.AES.encrypt(val, this.key, { iv: this.iv }).toString();
    } catch (e) {
      console.log(e?.message ?? e);
    }
  }

  decrypt(val) {
    try {
      if (typeof val === "object") {
        if (Array.isArray(val)) {
          return val.map((item) => this.decrypt(item));
        } else {
          return Object.entries(val).reduce((acc, [key, value]) => {
            acc[key] = this.decrypt(value);
            return acc;
          }, {});
        }
      } else {
        return JSON.parse(
          CryptoJS.AES.decrypt(val, this.key, { iv: this.iv }).toString()
        );
      }
    } catch (e) {
      console.log(e?.message ?? e);
    }
  }
}
