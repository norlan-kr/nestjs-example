import { IsNotEmpty } from 'class-validator';

export class CreateExperimentDto {
  @IsNotEmpty()
  name: string;
  address: string;
}
