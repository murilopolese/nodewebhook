# Node Web Hook

This is a tool created for sync repositories (mostly created by kids) into a server running [ScriptCraft](http://scriptcraft.org).

## Setup

Inside the file `config.js` you have an object with an array property called `repo`. This array must contain an object with a repo url and a destination folder as following:

<code>
{
	repos: [
		{
			url: 'git@github.com:murilopolese/scriptcraftmods.git',
			dest: '~/minecraft/plugins/scriptcraft/players/burrilove'
		}
	]
}
</code>

## Running

It will run at `1337` port by default but you can run it on a port of your choice. To launch it on your favorite port, in this case 8080, you can do `PORT=8080 node app.js` from Node Web Hook folder.

