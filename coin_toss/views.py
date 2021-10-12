from django.shortcuts import get_object_or_404, render
from rest_framework import viewsets, generics, filters
from rest_framework.response import Response
from rest_framework.permissions import SAFE_METHODS, BasePermission, AllowAny, IsAdminUser, DjangoModelPermissions, IsAuthenticatedOrReadOnly, IsAuthenticated
from .serializers import CoinTossSerializer
from .models import CoinToss


# Create your views here.

class CoinTossUserWritePermission(BasePermission):
    message = 'Editing posts is restricted to the author only.'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        print(obj.user, request.user)

        return obj.user == request.user

class CoinTossList(viewsets.ModelViewSet):
    permission_classes = [CoinTossUserWritePermission]
    serializer_class = CoinTossSerializer
    
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(CoinToss, user=item)

    #Define Custom Queryset
    def get_queryset(self):
        return CoinToss.objects.all()
    
class CoinTossDetail(generics.RetrieveAPIView):
    serializer_class = CoinTossSerializer

    def get_queryset(self):
        user_name = self.request.query_params.get('user_name', None)
        print(user_name)
        return CoinToss.objects.filter(user_name=user_name)

    
class CoinTossListDetailfilter(generics.ListAPIView):

    queryset = CoinToss.objects.all()
    serializer_class = CoinTossSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^user_name']

    # '^' Starts-with search.
    # '=' Exact matches.
    # '@' Full-text search. (Currently only supported Django's PostgreSQL backend.)
    # '$' Regex search.


class CoinTossSearch(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = CoinToss.objects.all()
    serializer_class = CoinTossSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^heads_lucky']

# class CoinTossList(viewsets.ViewSet):
#     permission_classes = [IsAuthenticated]
#     queryset = CoinToss.objects.all()
    
#     def list(self, request):
#         serializer_class = CoinTossSerializer(self.queryset, many=True)
#         return Response(serializer_class.data)
    
#     def retrieve(self, request, pk=None):
#         coin_toss = get_object_or_404(self.queryset, pk=pk)
#         serializer_class = CoinTossSerializer(coin_toss)
#         return Response(serializer_class.data)
        

# class CoinTossView(generics.ListCreateAPIView):
#     #permission_classes = [IsAuthenticated]
#     serializer_class = CoinTossSerializer
#     queryset = CoinToss.objects.all()
#     pass


# class CoinTossViewDetail(generics.RetrieveUpdateDestroyAPIView, CoinTossUserWritePermission):
#     permission_classes = [CoinTossUserWritePermission]
#     serializer_class = CoinTossSerializer
#     queryset = CoinToss.objects.all()
#     pass

 # def list(self, request):
    #     pass

    # def create(self, request):
    #     pass

    # def retrieve(self, request, pk=None):
    #     pass

    # def update(self, request, pk=None):
    #     pass

    # def partial_update(self, request, pk=None):
    #     pass

    # def destroy(self, request, pk=None):
    #     pass

# Concrete View Classes
# CreateAPIView
# Used for create-only endpoints.
# ListAPIView
# Used for read-only endpoints to represent a collection of model instances.
# RetrieveAPIView
# Used for read-only endpoints to represent a single model instance.
# DestroyAPIView
# Used for delete-only endpoints for a single model instance.
# UpdateAPIView
# Used for update-only endpoints for a single model instance.
# ListCreateAPIView
# Used for read-write endpoints to represent a collection of model instances.
# RetrieveUpdateAPIView
# Used for read or update endpoints to represent a single model instance.
# RetrieveDestroyAPIView
# Used for read or delete endpoints to represent a single model instance.
# RetrieveUpdateDestroyAPIView
# Used for read-write-delete endpoints to represent a single model instance.
