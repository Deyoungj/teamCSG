
from rest_framework import serializers
from .models import Student,Package, PackageEnroled, Tutor


class StudentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Student
        fields = "__all__"


class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = "__all__"


class TutorSerializer(serializers.ModelSerializer):
    package = PackageSerializer(many=True)
    class Meta:
        model = Tutor
        fields = "__all__"

# class PackageEnrolmentSerial izer(serializers.Serializer):
#     user_id = serializers.CharField()
#     package_id = serializers.CharField()

class PackageEnrolmentSerializer(serializers.ModelSerializer):
    student = StudentSerializer()
    package = PackageSerializer()
    tutor = TutorSerializer()
    class Meta:
        model = PackageEnroled
        fields = "__all__"