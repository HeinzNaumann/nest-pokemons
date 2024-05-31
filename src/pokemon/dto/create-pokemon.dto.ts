import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  // isInt, isPositive, min 1
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  // isString, MinLenth 1
  @IsString()
  @MinLength(4)
  name: string;
}
