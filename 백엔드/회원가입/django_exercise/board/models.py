from django.db import models
from django.utils import timezone

# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=16, unique=True, verbose_name='유저 이름' )
    user_nickname = models.CharField(max_length=16, unique=True, verbose_name='유저 별명')
    user_email = models.EmailField(max_length=128, unique=True, verbose_name='유저 이메일')
    user_pw = models.CharField(max_length=128, verbose_name='유저 비밀번호')
    user_register_dttm = models.DateTimeField(auto_now_add=True, verbose_name='계쩡 생성시간')

    def __str__(self):
        return self.user_name

    class Meta:
        db_table = 'user'
        verbose_name = '유저'
        verbose_name_plural = '유저'