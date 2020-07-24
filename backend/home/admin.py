from django.contrib import admin
from .models import Events, Message

admin.site.register(Message)
admin.site.register(Events)

# Register your models here.
