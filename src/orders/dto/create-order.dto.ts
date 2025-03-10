import { IsBoolean, IsEnum, IsNumber, IsOptional, IsPositive, Min } from "class-validator";
import { OrderStatus, OrderStatusList } from "../enum/order.enum";

export class CreateOrderDto {

@IsNumber() 
@IsPositive()
totalAmount: number;

@IsNumber() 
@IsPositive()
totalItems: number;

@IsEnum(OrderStatusList, {
    message: `Status must be one of these: ${ OrderStatusList}`,
})

@IsOptional()
status : OrderStatus = OrderStatus.PENDING;

@IsOptional()
@IsBoolean()
paid : boolean = false;

}
