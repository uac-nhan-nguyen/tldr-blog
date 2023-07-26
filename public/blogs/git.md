# git + github

## Git commands

### git clone using ssh key
```sh
cd some-folder
ssh-agent bash

# Enter new bash
ssh-add ~/.ssh/somekey
git clone some-repo
```

### git config local with ssh key
```sh
git config --local core.sshCommand "/usr/bin/ssh -i /home/me/.ssh/somekey"
```

### git commands

```sh
git checkout -b feature/TICKET-123
```
