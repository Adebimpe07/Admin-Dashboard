import CryptoJS from "crypto-js";

export default class Crypto {
  private key;
  private iv;

  constructor(key: any, iv: any) {
    this.key = key;
    this.iv = iv;
    this.encrypt = this.encrypt.bind(this);
    this.decrypt = this.decrypt.bind(this);
  }

  public encrypt(val) {
    try {
      if (typeof val === "object" && val) {
        if (Array.isArray(val)) {
          return val.map((item) => this.encrypt(item));
        } else {
          return Object.entries(val).reduce((acc, [field, value]) => {
            acc[field] = this.encrypt(value);
            return acc;
          }, {});
        }
      }

      return CryptoJS.AES.encrypt(JSON.stringify(val), this.key, {
        iv: this.iv,
      }).toString();
    } catch (e) {
      console.log(e?.message ?? e);
    }
  }

  public decrypt(val) {
    try {
      if (typeof val === "object" && val) {
        if (Array.isArray(val)) {
          return val.map((item) => this.decrypt(item));
        } else {
          return Object.entries(val).reduce((acc, [key, value]) => {
            acc[key] = this.decrypt(value);
            return acc;
          }, {});
        }
      } else {
        return CryptoJS.AES.decrypt(val, this.key, {
          iv: this.iv,
        }).toString(CryptoJS.enc.Utf8);
      }
    } catch (e) {
      console.log(e?.message ?? e);
    }
  }
}
