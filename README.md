# Study Snap

## Overview
Stuy Snap is a prototype application built for the purpose of researching improvement to student effectiveness when exposed to interactive, collaborative, and competetive studying technology. At its heart, Study Snap is a community flashcard application with the ability to challenge friends in face-offs in the same vein as Trivia Crack. 

## Development Environment
We are using Meteor as our platform of choice with Mongodb for storing data. The VM for running both is packaged right in this repo. To get setup, run:

```
git clone https://github.com/cjsauer/study-snap
cd study-snap
vagrant up   # (this is going to take a while)
```

Now that the VM is provisioned and booted, we want to log in and start the server:

```
vagrant ssh
cd study-snap
meteor
```

Note that the Meteor server automatically watches files for changes, recompiles them, and refreshes the browser. You are free to keep the server running while you develop from your host machine; the `study-snap/` directory is synced between the host and the VM. 

Don't forget to eventually shutdown the VM. Log out of the VM, and run `vagrant halt` within the `study-snap/` directory on the host computer. 
