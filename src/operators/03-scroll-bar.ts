import { fromEvent, map, throttleTime } from 'rxjs';

const text = document.createElement('div');
text.setAttribute('style', 'text-align: left; font-size: 2rem');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie ullamcorper leo, ac rutrum purus. Proin magna quam, sollicitudin eu maximus a, bibendum vel velit. Phasellus quis dui in ex posuere accumsan sed eu mauris. Morbi tempus egestas vestibulum. Fusce dapibus, mauris quis euismod consectetur, tellus nunc ultrices tortor, et varius orci elit non massa. Pellentesque blandit varius est, ut lacinia metus. Donec eleifend lorem enim, eu pellentesque sapien mollis sit amet. Phasellus mauris elit, tristique sit amet magna id, imperdiet convallis orci. Quisque vitae hendrerit nibh, a mattis neque. Maecenas eu varius ex, vitae placerat sem. Vestibulum urna urna, tincidunt nec elementum sit amet, viverra at elit. Vivamus at lacus quis arcu tincidunt accumsan sit amet vitae magna. Donec viverra ligula sit amet lorem feugiat dapibus. Vivamus dignissim, lacus et lobortis hendrerit, ligula felis euismod orci, nec bibendum leo tortor et justo. Etiam ultricies tempus quam sed fermentum.
<br/>
<br/>
Mauris hendrerit volutpat aliquet. Sed ut hendrerit nisl, sed dictum tellus. Morbi vulputate consequat augue et sollicitudin. Cras viverra rhoncus nisl sit amet lobortis. Quisque imperdiet lacus eu dui congue, vitae mattis dolor convallis. Mauris sagittis vel nisl id tincidunt. Integer blandit lacus turpis, vel fringilla dui semper ac. Morbi eu orci blandit, pharetra lacus ut, vestibulum elit. Etiam ligula lacus, commodo eu lorem nec, vulputate vestibulum nisi. Nunc blandit erat vel quam pharetra, eu vehicula dui molestie. Fusce sed urna sodales, accumsan leo sit amet, bibendum turpis. Morbi laoreet elit quis iaculis mattis. Mauris convallis est elit, et tincidunt libero dapibus quis. Fusce turpis eros, placerat nec tortor ut, suscipit lacinia sapien. Pellentesque ut lobortis odio. Donec porttitor commodo mi ullamcorper eleifend.
<br/>
<br/>
Duis vitae mi ac metus hendrerit suscipit non ut mauris. Sed eu nisl dui. Vivamus et orci et nisl tincidunt tempus in eu magna. Phasellus efficitur, ligula vel venenatis tristique, lectus nulla vestibulum urna, id malesuada nulla nisl in massa. Pellentesque et est eu nulla maximus facilisis at a nibh. Duis semper hendrerit ipsum eget pulvinar. Quisque porta finibus metus, nec blandit justo imperdiet ut. Nam scelerisque eros sed sapien vehicula, eget pulvinar quam fermentum. Maecenas consequat nec ex pharetra fermentum. Mauris maximus elit eget est venenatis placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br/>
<br/>
Aenean eu mauris neque. Integer tempus ullamcorper magna, id fermentum quam posuere vel. Fusce at fringilla turpis, vitae iaculis magna. Mauris sed arcu ex. Duis iaculis, urna pharetra sollicitudin pulvinar, lacus velit mollis arcu, sit amet convallis nulla purus finibus nunc. Proin elit leo, placerat quis quam in, fringilla pellentesque leo. Phasellus lacus elit, volutpat tincidunt nisl sit amet, pharetra venenatis est.
<br/>
<br/>
Proin non elementum neque. In et accumsan elit, ac mollis enim. Suspendisse potenti. Nulla dapibus dolor pellentesque libero ultricies bibendum vel ac leo. In elementum vel quam a commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac pulvinar sapien. Suspendisse augue neque, mollis non purus tristique, hendrerit ornare nulla. Duis leo sem, molestie ut viverra at, maximus eget diam. Duis justo massa, finibus ut quam vel, semper consequat lacus. Praesent non nibh aliquam, aliquet ipsum at, suscipit nisi. Curabitur pellentesque egestas risus, ac eleifend ligula tempus in.
`;
const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

/**
 * Function to calculate the progress
 */
const getProgress = (event) => {
  const { scrollHeight, scrollTop, clientHeight } = event.target.documentElement;
  return Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
};

// streams with observables
const scroll$ = fromEvent(document, 'scroll');

// create a variable to follow the observable changes
const progress$ = scroll$.pipe(throttleTime(10), map(getProgress));

// create a subscription to set the value
progress$.subscribe((value) => {
  progressBar.style.width = `${value}%`;
});
