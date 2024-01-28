# TODO APP #

<div align="center">
<a href="https://blu3tan.github.io/To-do-app/">
<img src=".src/assets/todo-showcase.gif">
</a>

"Mini" TODO app developed for the Odin Project Javascript curriculum
[Live Demo](https://blu3tan.github.io/To-do-app/)

</div>

# Concept #

For this project i followed the assignment suggestion in a "literal" way by taking 
inspiration from the apps suggested, "Things" in particular.

This to say that my concept led the development of this TODO app across uncharted 
territory, at least at this stage in the curriculum.

The result is a very minimal and fully responsive todo app that meets all the requirements.

- The todo can be filtered by tag (or "projects" if you like)
- The tags are created dynamically on the todo creation
- Each tag has his own persistent color that is reflected by the todo color
- The tags are dynamically removed if there are no todo with the same tag
- Editing the todo also reflects on tags and colors



# Modular logic #

Even thou the aspect is simple the logic behind is kinda complex ( at least for me). 
This complexity is reflected on the code.

I've followed the SOLID principles as much as i could but looking back at the whole 
body of work i'm sure there are a lot of things that could be improved. Also the modules 
naming is a bit weird, and a proper folder tree really needed but at this stage i'm very 
happy with the end result and i want to move on with the curriculum.



# Visual and ux #

The ui is super clean and minimal but hides a pretty complex logic. All the visual 
aspects i have implemented thou are the result of a focus on ux and functionality 
and are never just an aesthetical detail.

For example the button that opens the form used to add the todo also close the same 
form but this functionality is implemented with visual cue and animation and code to 
prevent bugs (as far as i tested).

The tags when clicked filter the list but upon selecting one the one selected before 
needs to go back to his original state.

This app is full of this little things that took me a lot to implement so if you 
could spare few seconds play with it and let me know.

-----------------------------------------------------------------------------

