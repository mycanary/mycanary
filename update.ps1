While ($True)
{
    date;
    git stash --include-untracked;
    yarn run ng update;
    yarn run ng update @angular/core @angular/cli @angular/cdk @angular/material @angular/localize rxjs;
    yarn run ng update;
    git add .;
    git commit -m "update angular" -m "angular {cli, cdk, material, localize}, and rxjs";
    git push origin master;
    Start-Sleep -Seconds 3600;
}
