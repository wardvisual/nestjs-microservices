import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'LOGGER_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
