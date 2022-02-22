# HomeyJson
 
Node script for backed up Homey json files downloaded from [Homey Backup](https://homeybackup.web.app/login/)

## Rename ID's with names

To create a json file with names instead of id's, run

```
node homey
```

## Searching

To search for a logic variable, device or whatever

```
node homey "SEARCH STRING TO LOOK FOR"
```

I.E. if you want to see in what flows the logic variable `'My var'` is used, run

```
node homey "My var"
```

This will result in something like this

```txt
---
"My var" is found in the following flows:
---
Flow name 1 :: https://my.homey.app/homeys/abcdef123456/flows/abc123
Flow name 2 :: https://my.homey.app/homeys/abcdef123456/flows/def456
Flow name 3 :: https://my.homey.app/homeys/abcdef123456/flows/ghi789
---
```

## Collaborate

Pull requests and suggestions for improvements are more than welcome.