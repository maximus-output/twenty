/* @license Enterprise */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppTokenEntity } from 'src/engine/core-modules/app-token/app-token.entity';
import { EnterpriseResolver } from 'src/engine/core-modules/enterprise/enterprise.resolver';
import { EnterprisePlanService } from 'src/engine/core-modules/enterprise/services/enterprise-plan.service';
import { TwentyConfigModule } from 'src/engine/core-modules/twenty-config/twenty-config.module';
@Module({
  imports: [
    TwentyConfigModule,
    TypeOrmModule.forFeature([AppTokenEntity]),
  ],
  providers: [
    EnterprisePlanService,
    EnterpriseResolver,
  ],
  exports: [EnterprisePlanService],
})
export class EnterpriseModule {}
