from Mockr.models import MockRating

__author__ = 'andreasfalley'


from rest_framework import serializers


from Mockr.models import MockrUser, BabyName, Mock, Favorite


class MockrUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = MockrUser
        fields = ('mockr_user', 'username')


class MockRatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = MockRating
        fields = ('brutality', 'stupidity', 'funny', 'overall')


class MocksSerializer(serializers.ModelSerializer):

    ratings = MockRatingSerializer(many=True, read_only=True)

    class Meta:
        model = Mock
        fields = ('mock_text', 'ratings')


class BabyNameSerializer(serializers.ModelSerializer):
    mocks = MocksSerializer(many=True, read_only=True)
    babynamer = MockrUserSerializer(many=True, read_only=True)

    class Meta:
        model = BabyName
        fields = ('pk','name', 'rank',  'mocks', 'babynamer')


# class NestedBabyNameSerializer(serializers.ModelSerializer):
#     mocks = MocksSerializer(many=True, read_only=True)
#
#     class Meta:
#         model = BabyName
#         fields = ('name', 'rank', 'mocks')


class FavoriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Favorite
        fields = ('is_favorite', 'mocks', 'mockr_user')
