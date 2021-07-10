# Reactivate the Droids

An adaptation of the interface used to activate the battle droids in Star Wars Episode I: The Phantom Menace created to explore animation in React framework. This is seen on screen at around 1h 49m.

[View demo](https://mystifying-dijkstra-4b2601.netlify.app)

## Interface

We only see the button at bottom right used on screen to activate the battle droids. What appears to be another button to the left displays a wave form that gains intensity after activation. Took some liberties with this and made the button function as a "signal cut" that disables the interface until restored.

## Animation

Three types of animation are used: Lottie, canvas, and css keyframes.

### Lottie

The battle droid display is animated in After Effects and exported as a Lottie animation. See Lottie and PanelMain components.

### Canvas

A canvas element is used to display the wave form on the left side button. See ScrollingChart component.

### CSS Keyframes

Keyframes are used for the animations of the meters at the top of the interface and the activation button. See ActionButton and PanelHeader components as well as actionButton.css and panelHeader.css.

## Font

The unique text on the display was made possible by converting the [TF Gunray font by AurekFonts](https://aurekfonts.github.io/?font=TFGunray) to WOFF2 format.