// Ensure the team exists when the server starts
ServerEvents.loaded(event => {
    // 1. Add the team
    event.server.runCommandSilent(`team add hide_names`)
    
    // 2. Set nametag visibility to never (This hides the floating name)
    event.server.runCommandSilent(`team modify hide_names nametagVisibility never`)
    
    // 3. Disable "See Friendly Invisibles" (This ensures no weird glow/highlighting)
    event.server.runCommandSilent(`team modify hide_names seeFriendlyInvisibles false`)
})

// Automatically add players to the team upon login
PlayerEvents.loggedIn(event => {
    // Add the player to the team
    event.server.runCommandSilent(`team join hide_names ${event.player.username}`)
})