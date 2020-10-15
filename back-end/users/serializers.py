from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model, authenticate
from guardian.shortcuts import assign_perm
from django.utils.translation import ugettext_lazy as _


User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.save()
        assign_perm('developerverse.add_project', user)
        token = Token.objects.create(user=user)
        return {
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        }

    def validate_login(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'),
                                email=email, password=password)
            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
            token = Token.objects.get(user=user)
            return {
                'token': token.key,
                'user_id': user.pk,
                'email': user.email
            }
        else:
            msg = _("Must include 'email' and 'password'.")
            raise serializers.ValidationError(msg, code='authorization')
