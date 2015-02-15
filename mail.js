$('document').ready(function (){
    $('button').click(function(){
        console.log('triggered');
        return;
        $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
              'key': 'bAsQzrjpVMCK7L7HeNKN8w',
              'message': {
                'from_email': 'message.ifedapoolarewaju@gmail.com',
                'to': [
                    {
                      'email': 'omojolasolomon@gmail.com',
                      'name': 'recipient name(optional)',
                      'type': 'to'
                    },
                    {
                      'email': 'RECIPIENT_NO_2@EMAIL.HERE',
                      'name': '‘ANOTHER RECIPIENT NAME (OPTIONAL)’',
                      'type': 'to'
                    }
                  ],
                'autotext': 'true',
                'subject': 'you subject here',
                'html': 'ypu email content here! you can use html'
              }
            }
          }).done(function(response) {
            console.log(response); // if you're into that sorta thing
          });
        });
    });