import { Module } from '@nestjs/common';
import { FligthController } from './fligth.controller';
import { FligthService } from './fligth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGTH, PASSENGER } from '../common/models/models';
import { FligthSchema } from './schema/fligth.schema';
import { PassengerSchema } from './schema/passenger.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGTH.name,
        useFactory: () => FligthSchema.plugin(require('mongoose-autopopulate')),
      },
      {
        name: PASSENGER.name,
        useFactory: () => PassengerSchema,
      },
    ]),
  ],
  controllers: [FligthController],
  providers: [FligthService],
})
export class FligthModule {}
