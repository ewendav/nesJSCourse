import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll() {
        return 'return all the coffes';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns #${id} coffee`;
    }

    @Post()
    create(@Body() body) {
        return body;
        // return 'This action creates a coffee'
    }

    @Patch(':id')
    update(@Param('id') id : string, body){
        return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes #${id} coffee`;
    }

}