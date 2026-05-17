import { Injectable } from '@nestjs/common';
import { randomBytes } from 'node:crypto';
import { authenticator } from 'otplib';
import * as QRCode from 'qrcode';

@Injectable()
export class TotpService {
  generateSecret(): string {
    return authenticator.generateSecret();
  }

  async generateQrCode(email: string, secret: string, issuer: string = 'App'): Promise<string> {
    const otpauthUrl = authenticator.keyuri(email, issuer, secret);
    return QRCode.toDataURL(otpauthUrl);
  }

  verify(token: string, secret: string): boolean {
    return authenticator.verify({ token, secret });
  }

  generateBackupCodes(count: number = 10): string[] {
    return Array.from({ length: count }, () =>
      randomBytes(4).toString('hex').toUpperCase().slice(0, 6),
    );
  }
}
