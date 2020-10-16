from rest_framework import permissions

# Code snippet is originally from Django Rest Framework tutorial and has been
# slightly modified. See the following link for more info:
# https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/

class IsCreatorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed for any
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the project
        return obj.user == request.user 