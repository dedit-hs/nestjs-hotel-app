import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelsModule } from './hotels/hotels.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HotelsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'masuklah',
      database: 'hotel-app',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
