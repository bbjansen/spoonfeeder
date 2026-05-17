import { Module } from '@nestjs/common';
import { AdminModule as AdminJSModule } from '@adminjs/nestjs';
import AdminJS from 'adminjs';

@Module({
  imports: [
    AdminJSModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          branding: {
            companyName: 'Admin Panel',
            softwareBrothers: false,
          },
          resources: [
            // Register your entities here:
            // {
            //   resource: UserEntity,
            //   options: {
            //     properties: {
            //       password: { isVisible: false },
            //     },
            //   },
            // },
          ],
        },
        auth: {
          authenticate: async (email: string, password: string) => {
            const adminEmail = process.env.ADMIN_EMAIL;
            const adminPassword = process.env.ADMIN_PASSWORD;
            if (!adminEmail) throw new Error('ADMIN_EMAIL environment variable is required');
            if (!adminPassword) throw new Error('ADMIN_PASSWORD environment variable is required');

            if (email === adminEmail && password === adminPassword) {
              return { email: adminEmail };
            }
            return null;
          },
          cookieName: 'adminjs',
          cookiePassword: (() => {
            const secret = process.env.ADMIN_SESSION_SECRET;
            if (!secret) throw new Error('ADMIN_SESSION_SECRET environment variable is required');
            return secret;
          })(),
        },
        sessionOptions: {
          resave: false,
          saveUninitialized: false,
          secret: (() => {
            const secret = process.env.ADMIN_SESSION_SECRET;
            if (!secret) throw new Error('ADMIN_SESSION_SECRET environment variable is required');
            return secret;
          })(),
        },
      }),
    }),
  ],
})
export class AdminModule {}
