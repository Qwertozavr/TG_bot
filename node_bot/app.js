import {Input, Telegraf} from 'telegraf';
import { message } from 'telegraf/filters';

const bot = new Telegraf('6101514534:AAFUAEmqbXbPjIND3SDQJRgVyS4hs_Qofi8');

bot.start((ctx) => ctx.reply('Добро пожаловать!'));



const TestCom = (ctx) => ctx.reply('Test2');
bot.command('test', TestCom)

const PicCom = (ctx) => ctx.replyWithPhoto(Input.fromURLStream('https://picsum.photos/200/300/?random', 'kitten.jpg'));
bot.command('piccom', PicCom)



bot.hears('Время', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Ну какое-то время!');
})

bot.hears('Да', (ctx) => ctx.reply('Нет'));

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));