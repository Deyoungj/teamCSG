from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from .serializers import StudentSerializer, PackageSerializer, PackageEnrolmentSerializer, TutorSerializer
from .models import Student, Package, PackageEnroled, Tutor
from rest_framework.permissions import IsAuthenticated
 
class StudentView(ModelViewSet):
    # http_method_names = ['post']
    serializer_class = StudentSerializer
    queryset = Student.objects.all()
    permission_classes = []
    
    def create(self, request):
        valid_request = self.serializer_class(data=request.data)
        valid_request.is_valid(raise_exception=True)

        print(**valid_request.validated_data)

        Student.objects.create(**valid_request.validated_data)

        return Response(
            {'success':'student created successfully'},
            status=status.HTTP_201_CREATED
        )


class PackageView(ModelViewSet):
    serializer_class = PackageSerializer
    queryset = Package.objects.all()
    permission_classes = []

    def create(self, request):
        valid_request = self.serializer_class(data=request.data)
        valid_request.is_valid(raise_exception=True)

        Package.objects.create(**valid_request.validated_data)

        return Response(
            {'success': 'package created successfully'},
            status=status.HTTP_201_CREATED
        )

class EnrollStudentView(ModelViewSet):
    # http_method_names = ['post']
    serializer_class = PackageEnrolmentSerializer
    queryset = PackageEnroled.objects.select_related('student', 'package', 'tutor')
    permission_classes = []



    def create(self, request):
        valid_request = self.serializer_class(data=request.data)
        valid_request.is_valid(raise_exception=True)
        # student = Student.objects.filter(id=valid_request.validated_data['student']).first()
        # package = Package.objects.filter(id=valid_request.validated_data['package']).first()

        print(valid_request.validated_data['student'], valid_request.validated_data['package'])


        PackageEnroled.objects.create(**valid_request.validated_data)

        return Response(
            {'success': 'enrolled student success'},
            status = status.HTTP_201_CREATED
        )



class TutorView(ModelViewSet):
    serializer_class = TutorSerializer
    queryset = Tutor.objects.prefetch_related('package')
    permission_classes = []


    def create(self,request):
        valid_request = TutorSerializer(data=request.date)
        valid_request.is_valid(raise_exeption=True)
        
        Tutor.objects.create(**valid_request.validated_data)

        return Response(
            {'success':'tutor created successfully'},
            status = status.HTTP_201_CREATED
        )