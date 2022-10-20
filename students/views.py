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
    permission_classes = [IsAuthenticated]
    
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
    permission_classes = [IsAuthenticated]

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
    permission_classes = [IsAuthenticated]



    def create(self, request):

        student = Student.objects.filter(id=request.POST.get('student', None))[0]
        package = Package.objects.filter(id=request.POST.get('package', None))[0]
        tutor = Tutor.objects.filter(id=request.POST.get('tutor', None))[0]
        print(student, package, tutor)

        
        packageenroled=PackageEnroled.objects.create(student=student, package=package, tutor=tutor)
        packageenroled.save()
        serializer = self.serializer_class(tutor)

        

        return Response(
            {'success': 'enrolled student success', 'data':serializer.data},
            status = status.HTTP_201_CREATED
        )

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data

        student = Student.objects.filter(id=request.POST.get('student', instance.student))[0]
        package = Package.objects.filter(id=request.POST.get('package', instance.package))[0]
        tutor = Tutor.objects.filter(id=request.POST.get('tutor', instance.tutor))[0]

        print(instance.id)
        instance.student = student
        instance.tutor = tutor
        instance.package = package
        instance.save()
        serializer = self.serializer_class(data=instance)

        return Response({'success':'package enrolled updated successfully'}, status=status.HTTP_201_CREATED)

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()

        if 'package' in request.data:
            package = Package.objects.filter(id=request.POST.get('package', instance.package))[0]
            instance.package = package

        if 'student' in request.data:
            student = Student.objects.filter(id=request.POST.get('student', instance.student))[0]
            instance.student = student

        if 'tutor' in request.data:
            tutor = Tutor.objects.filter(id=request.POST.get('tutor', instance.tutor))[0]
            instance.tutor = tutor

        
        
        
        instance.save()
        serializer = self.serializer_class(data=instance)

        return Response({'success':'package enrolled updated successfully'}, status=status.HTTP_201_CREATED)





class TutorView(ModelViewSet):
    serializer_class = TutorSerializer
    queryset = Tutor.objects.prefetch_related('package')
    permission_classes = [IsAuthenticated]


    def create(self,request):
        valid_request = TutorSerializer(data=request.data)
        valid_request.is_valid(raise_exception=True)
        
        Tutor.objects.create(**valid_request.validated_data)

        return Response(
            {'success':'tutor created successfully'},
            status = status.HTTP_201_CREATED
        )

    def update(self, request):
        instance = self.get_object()

