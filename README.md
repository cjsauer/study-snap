# Study Snap

## Overview
Stuy Snap is a prototype application built for the purpose of researching improvement to student effectiveness when exposed to interactive, collaborative, and competetive studying technology. At its heart, Study Snap is a community flashcard application with the ability to challenge friends in face-offs in the same vein as Trivia Crack.

## Development Environment
We are using Meteor as our platform of choice with Mongodb for storing data. To get setup, [download the box somewhere onto your computer](https://drive.google.com/open?id=0B2SSSb2bNGtaZnlJc3Y2cFlPcFk&authuser=0), and then run:

```
git clone https://github.com/cjsauer/study-snap
cd study-snap
vagrant init /path/to/meteor-shire.box
```

Obviously replace `/path/to/meteor-shire.box` to match the correct path of the box. Edit the Vagrantfile and add the following snippet to ensure that Meteor has enough memory on the VM:

```
config.vm.provider "virtualbox" do |vb|
  # Windows users may need to uncomment this line
  # vb.gui = true

  # Customize the amount of memory on the VM:
  vb.memory = "2048"
end
```

Now you can bootup the machine:

```
vagrant up
```

Now that the VM is provisioned and booted, we want to log in and start the server:

```
vagrant ssh
cd /vagrant
meteor
```

Note that the Meteor server automatically watches files for changes, recompiles them, and refreshes the browser. You are free to keep the server running while you develop from your host machine; the `/vagrant` directory is synced between the host and the VM.

Don't forget to eventually shutdown the VM. Log out of the VM, and run `vagrant halt` within the project directory.
## Windows users
Meteor runs natively on Windows. It is best to just build it from the working directory.
