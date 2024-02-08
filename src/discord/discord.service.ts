import {
  Context,
  Options,
  SlashCommand,
  SlashCommandContext,
  StringOption,
} from 'necord';
import { Injectable } from '@nestjs/common';

class TextDto {
  @StringOption({
    name: 'text',
    description: 'Your text',
    required: true,
  })
  text: string;
}

@Injectable()
export class DiscordService {
  @SlashCommand({
    name: 'length',
    description: 'Get length of text',
  })
  public async onLength(
    @Context() [interaction]: SlashCommandContext,
    @Options() { text }: TextDto,
  ) {
    return interaction.reply({ content: `Length of your text ${text.length}` });
  }
}
