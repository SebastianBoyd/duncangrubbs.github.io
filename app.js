var drake = [
    {
        "periods": [
            {
                "name": "1st",
                "end": 528
            },
            {
                "name": "2nd",
                "end": 581
            },
            {
                "name": "Break",
                "end": 596
            },
            {
                "name": "3rd",
                "end": 649
            },
            {
                "name": "Advisory",
                "end": 668
            },
            {
                "name": "4th",
                "end": 721
            },
            {
                "name": "Lunch",
                "end": 761
            },
            {
                "name": "5th",
                "end": 814
            },
            {
                "name": "6th",
                "end": 867
            },
            {
                "name": "7th",
                "end": 920
            },
            {
                "name": "Freedom",
                "end": 920
            }
        ]
    },
    {
        "periods": [
            {
                "name": "1st",
                "end": 570
            },
            {
                "name": "Break",
                "end": 580
            },
            {
                "name": "2nd",
                "end": 680
            },
            {
                "name": "Lunch",
                "end": 720
            },
            {
                "name": "5th",
                "end": 815
            },
            {
                "name": "Break",
                "end": 825
            },
            {
                "name": "7th",
                "end": 920
            },
            {
                "name": "Freedom",
                "end": 920
            }
        ]
    },
    {
        "periods": [
            {
                "name": "3rd",
                "end": 570
            },
            {
                "name": "Break",
                "end": 585
            },
            {
                "name": "Advisory",
                "end": 600
            },
            {
                "name": "Tutorial",
                "end": 650
            },
            {
                "name": "4th",
                "end": 745
            },
            {
                "name": "Lunch",
                "end": 785
            },
            {
                "name": "6th",
                "end": 880
            },
            {
                "name": "Freedom",
                "end": 880
            }
        ]
    },
    {
        "periods": [
            {
                "name": "1st",
                "end": 570
            },
            {
                "name": "Break",
                "end": 580
            },
            {
                "name": "2nd",
                "end": 680
            },
            {
                "name": "Lunch",
                "end": 720
            },
            {
                "name": "5th",
                "end": 815
            },
            {
                "name": "Break",
                "end": 825
            },
            {
                "name": "7th",
                "end": 920
            },
            {
                "name": "Freedom",
                "end": 920
            }
        ]
    },
    {
        "periods": [
            {
                "name": "3rd",
                "end": 570
            },
            {
                "name": "Break",
                "end": 585
            },
            {
                "name": "Advisory",
                "end": 600
            },
            {
                "name": "Tutorial",
                "end": 650
            },
            {
                "name": "4th",
                "end": 745
            },
            {
                "name": "Lunch",
                "end": 785
            },
            {
                "name": "6th",
                "end": 880
            },
            {
                "name": "Freedom",
                "end": 880
            }
        ]
    }
];


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: '/' })
  .then(function () {
    console.log('[SW] Registered');
  })
  .catch(err => {
    console.warn('Error', err);
  });
}


var period = document.getElementById('period');
var minutes = document.getElementById('minutes');
var next = document.getElementById('next');
var inSchool = document.getElementById('in-school');
var outSchool = document.getElementById('out-school');

var now = new Date();
var day = now.getDay();
var date = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();
min = (hour * 60) + min;
var sec = now.getSeconds();

var currentSchedule = drake[day - 1].periods;

if (day == 6 || day == 0 || min > currentSchedule[currentSchedule.length - 1].end) {
  inSchool.style.display = 'none';
  outSchool.style.display = 'block';
} else {
  updateInfo();
  window.setInterval(updateInfo, 100);
}

function updateInfo() {
  for (var i = 0; i < currentSchedule.length; i++) {
    if(min > currentSchedule[i].end && min < currentSchedule[i + 1].end) {
      period.textContent = currentSchedule[i + 1].name;
      var left = currentSchedule[i + 1].end - min;
      minutes.textContent = left + ' minutes left';
      next.textContent = currentSchedule[i + 2].name;
    }
  }
}
