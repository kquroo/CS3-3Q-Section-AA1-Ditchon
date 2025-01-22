const pi = 3.14;

document.write("Value of pi: " + pi);
document.write('<br><br>');

let radius = 6.378e6; 
document.write("Radius of the sphere: " + radius);
document.write('<br><br>');

let Circumference = 2 * (pi * radius);
document.write("Circumference of the sphere: " + Circumference);
document.write('<br><br>');

let Area = 4 * pi * (radius ** 2);
document.write("Surface area of the sphere: " + Area);
document.write('<br><br>');

let Volume = (4 / 3) * (pi * radius ** 3); 
document.write("Volume of the sphere: " + Volume);
document.write('<br><br>');


