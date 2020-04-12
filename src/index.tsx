import { NativeModules } from "react-native";

const { RNFastOpenPGP } = NativeModules;

export interface KeyOptions {
  /**
   * default: 2048
   */
  RSABits?: 2048 | 4096 | 1024;

  /**
   * default: aes128
   */
  cipher?: "aes128" | "aes192" | "aes256";

  /**
   * default: none
   */
  compression?: "none" | "zlib" | "zip";

  /**
   * default: sha256
   */
  hash?: "sha256" | "sha224" | "sha384" | "sha512";

  /**
   * default: 0
   */
  compressionLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}
export interface Options {
  comment?: string;
  email?: string;
  name?: string;
  passphrase?: string;
  keyOptions?: KeyOptions;
}
export interface KeyPair {
  publicKey: string;
  privateKey: string;
}

export default class OpenPGP {
  static decrypt(
    message: string,
    privateKey: string,
    passphrase: string
  ): Promise<string> {
    return RNFastOpenPGP.decrypt(message, privateKey, passphrase);
  }
  static decryptFile(
    inputFile: string,
    outputFile: string,
    privateKey: string,
    passphrase: string
  ): Promise<string> {
    return RNFastOpenPGP.decryptFile(inputFile, outputFile, privateKey, passphrase);
  }
  static encrypt(
    message: string, 
    publicKey: string
  ): Promise<string> {
    return RNFastOpenPGP.encrypt(message, publicKey);
  }
  static encryptFile(
    inputFile: string, 
    outputFile: string,
    publicKey: string
  ): Promise<string> {
    return RNFastOpenPGP.encryptFile(inputFile, outputFile, publicKey);
  }
  static sign(
    message: string,
    publicKey: string,
    privateKey: string,
    passphrase: string
  ): Promise<string> {
    return RNFastOpenPGP.sign(message, publicKey, privateKey, passphrase);
  }
  static signFile(
    inputFile: string,
    outputFile: string,
    publicKey: string,
    privateKey: string,
    passphrase: string
  ): Promise<string> {
    return RNFastOpenPGP.signFile(inputFile, outputFile, publicKey, privateKey, passphrase);
  }
  static verify(
    signature: string,
    message: string,
    publicKey: string
  ): Promise<boolean> {
    return RNFastOpenPGP.verify(signature, message, publicKey);
  }
  static verifyFile(
    signature: string,
    inputFile: string,
    publicKey: string
  ): Promise<boolean> {
    return RNFastOpenPGP.verifyFile(signature, inputFile, publicKey);
  }
  static decryptSymmetric(
    message: string,
    passphrase: string,
    options?: KeyOptions
  ): Promise<string> {
    return RNFastOpenPGP.decryptSymmetric(message, passphrase, options);
  }
  static decryptSymmetricFile(
    inputFile: string,
    outputFile: string,
    passphrase: string,
    options?: KeyOptions
  ): Promise<string> {
    return RNFastOpenPGP.decryptSymmetricFile(inputFile, outputFile, passphrase, options);
  }
  static encryptSymmetric(
    message: string,
    passphrase: string,
    options?: KeyOptions
  ): Promise<string> {
    return RNFastOpenPGP.encryptSymmetric(message, passphrase, options);
  }
  static encryptSymmetricFile(
    inputFile: string,
    outputFile: string,
    passphrase: string,
    options?: KeyOptions
  ): Promise<string> {
    return RNFastOpenPGP.encryptSymmetricFile(inputFile, outputFile, passphrase, options);
  }
  static generate(options: Options): Promise<KeyPair> {
    return RNFastOpenPGP.generate(options);
  }
}
