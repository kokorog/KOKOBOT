import discord
client = discord.Client()

TOKEN = NTM5NzY0NTYzNDA3NjY3MjEw.D1HkOA.GfGipuWRHxooA8LgrIXtXDQ9w38

@client.event
async def on_ready():
    print("The bot is ready!")
    await client.change_presence(game=discord.Game(name="Making a    bot"))

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.content == "Hello":
        await client.send_message(message.channel, "World")

client.run(TOKEN)
